## Integration test resources

Certain resources need to be created to make sure the integration test
has backend resources to test against. Follow steps bellow to create them:

1. Create a Cognito Identity Pool

   ```console
   aws cognito-identity create-identity-pool --identity-pool-name [NAME] --allow-unauthenticated-identities --output text --query '[IdentityPoolId]'
   ```

   It outputs `IdentityPoolId`.

1. Create a IAM Role

   1. If you create the Identity Pool with AWS console and allow creating roles on your behalf, you can skip this step

   1. Command line:

   ```console
   aws iam create-role --role-name=[ROLE_NAME] --assume-role-policy-document '{
     "Statement": [
       {
         "Effect": "Allow",
         "Principal": {
           "Federated": "cognito-identity.amazonaws.com"
         },
         "Action": "sts:AssumeRoleWithWebIdentity"
       }
     ]
   }' --output text --query 'Role.Arn'
   ```

   It outputs `RoleArn`

1. Set the unauthenticated role of the Identity Pool created in Step 1 to the role created in Step 2

   ```console
   aws cognito-identity set-identity-pool-roles --identity-pool-id [IdentityPoolId] --roles unauthenticated=[RoleArn]
   ```

1. Run the test with ENV. For example:

   ```console
   AWS_SMOKE_TEST_REGION=[Region] AWS_SMOKE_TEST_IDENTITY_POOL_ID=[IdentityPoolId] yarn test:e2e
   ```
