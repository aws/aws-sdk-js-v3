<!-- generated file, do not edit directly -->

# @aws-sdk/client-codecommit

## Description

AWS SDK for JavaScript CodeCommit Client for Node.js, Browser and React Native.

<fullname>CodeCommit</fullname>

<p>This is the <i>CodeCommit API Reference</i>. This reference provides descriptions of the operations and data types for
CodeCommit API along with usage examples.</p>
<p>You can use the CodeCommit API to work with the following objects:</p>
<p>Repositories, by calling the following:</p>
<ul>
<li>
<p>
<a>BatchGetRepositories</a>, which returns information about one or more repositories associated with your Amazon Web Services account.</p>
</li>
<li>
<p>
<a>CreateRepository</a>, which creates an CodeCommit repository.</p>
</li>
<li>
<p>
<a>DeleteRepository</a>, which deletes an CodeCommit repository.</p>
</li>
<li>
<p>
<a>GetRepository</a>, which returns information about a specified repository.</p>
</li>
<li>
<p>
<a>ListRepositories</a>, which lists all CodeCommit repositories associated with your Amazon Web Services account.</p>
</li>
<li>
<p>
<a>UpdateRepositoryDescription</a>, which sets or updates the description of the repository.</p>
</li>
<li>
<p>
<a>UpdateRepositoryEncryptionKey</a>, which updates the Key Management Service encryption key used
to encrypt and decrypt a repository.</p>
</li>
<li>
<p>
<a>UpdateRepositoryName</a>, which changes the name of the
repository. If you change the name of a repository, no other users of that
repository can access it until you send them the new HTTPS or SSH URL to
use.</p>
</li>
</ul>
<p>Branches, by calling the following:</p>
<ul>
<li>
<p>
<a>CreateBranch</a>, which creates a branch in a specified
repository.</p>
</li>
<li>
<p>
<a>DeleteBranch</a>, which deletes the specified branch in a repository unless it is the default branch.</p>
</li>
<li>
<p>
<a>GetBranch</a>, which returns information about a specified branch.</p>
</li>
<li>
<p>
<a>ListBranches</a>, which lists all branches for a specified repository.</p>
</li>
<li>
<p>
<a>UpdateDefaultBranch</a>, which changes the default branch for a repository.</p>
</li>
</ul>
<p>Files, by calling the following:</p>
<ul>
<li>
<p>
<a>DeleteFile</a>, which deletes the content of a specified file from a specified branch.</p>
</li>
<li>
<p>
<a>GetBlob</a>, which returns the base-64 encoded content of an
individual Git blob object in a repository.</p>
</li>
<li>
<p>
<a>GetFile</a>, which returns the base-64 encoded content of a specified file.</p>
</li>
<li>
<p>
<a>GetFolder</a>, which returns the contents of a specified folder or directory.</p>
</li>
<li>
<p>
<a>ListFileCommitHistory</a>, which retrieves a list of commits and changes to a specified file. </p>
</li>
<li>
<p>
<a>PutFile</a>, which adds or modifies a single file in a specified repository and branch.</p>
</li>
</ul>
<p>Commits, by calling the following:</p>
<ul>
<li>
<p>
<a>BatchGetCommits</a>, which returns information about one or more commits in a repository.</p>
</li>
<li>
<p>
<a>CreateCommit</a>, which creates a commit for changes to a repository.</p>
</li>
<li>
<p>
<a>GetCommit</a>, which returns information about  a commit, including commit
messages and author and committer information.</p>
</li>
<li>
<p>
<a>GetDifferences</a>, which returns information about the
differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID,
or other fully qualified reference).</p>
</li>
</ul>
<p>Merges, by calling the following:</p>
<ul>
<li>
<p>
<a>BatchDescribeMergeConflicts</a>, which returns information about conflicts in a merge between commits in a repository.</p>
</li>
<li>
<p>
<a>CreateUnreferencedMergeCommit</a>, which creates an unreferenced commit between two branches or commits for the
purpose of comparing them and identifying any potential conflicts.</p>
</li>
<li>
<p>
<a>DescribeMergeConflicts</a>, which returns information about merge conflicts between the base, source, and destination versions
of a file in a potential merge.</p>
</li>
<li>
<p>
<a>GetMergeCommit</a>, which returns information about the merge between a source and destination commit. </p>
</li>
<li>
<p>
<a>GetMergeConflicts</a>, which returns information about merge conflicts
between the source and destination branch in a pull request.</p>
</li>
<li>
<p>
<a>GetMergeOptions</a>, which returns information about the available merge options between two branches or commit specifiers.</p>
</li>
<li>
<p>
<a>MergeBranchesByFastForward</a>, which merges two branches using the fast-forward merge option.</p>
</li>
<li>
<p>
<a>MergeBranchesBySquash</a>, which merges two branches using the squash merge option.</p>
</li>
<li>
<p>
<a>MergeBranchesByThreeWay</a>, which merges two branches using the three-way merge option.</p>
</li>
</ul>
<p>Pull requests, by calling the following:</p>
<ul>
<li>
<p>
<a>CreatePullRequest</a>, which creates a pull request in a specified repository.</p>
</li>
<li>
<p>
<a>CreatePullRequestApprovalRule</a>, which creates an approval rule for a specified pull request.</p>
</li>
<li>
<p>
<a>DeletePullRequestApprovalRule</a>, which deletes an approval rule for a specified pull request.</p>
</li>
<li>
<p>
<a>DescribePullRequestEvents</a>, which returns information about one or more pull request events.</p>
</li>
<li>
<p>
<a>EvaluatePullRequestApprovalRules</a>, which evaluates whether a pull request has met all the conditions specified in its associated approval rules.</p>
</li>
<li>
<p>
<a>GetCommentsForPullRequest</a>, which returns information about comments on a specified pull request.</p>
</li>
<li>
<p>
<a>GetPullRequest</a>, which returns information about a specified pull request.</p>
</li>
<li>
<p>
<a>GetPullRequestApprovalStates</a>, which returns information about the approval states for a specified pull request.</p>
</li>
<li>
<p>
<a>GetPullRequestOverrideState</a>, which returns information about whether approval rules have been set aside (overriden) for a
pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.</p>
</li>
<li>
<p>
<a>ListPullRequests</a>, which lists all pull requests for a repository.</p>
</li>
<li>
<p>
<a>MergePullRequestByFastForward</a>, which merges the source destination branch of a pull request into the specified destination
branch for that pull request using the fast-forward merge option.</p>
</li>
<li>
<p>
<a>MergePullRequestBySquash</a>, which merges the source destination branch of a pull request into the specified destination
branch for that pull request using the squash merge option.</p>
</li>
<li>
<p>
<a>MergePullRequestByThreeWay</a>, which merges the source destination branch of a pull request into the specified destination
branch for that pull request using the three-way merge option.</p>
</li>
<li>
<p>
<a>OverridePullRequestApprovalRules</a>, which sets aside all approval rule requirements for a pull request.</p>
</li>
<li>
<p>
<a>PostCommentForPullRequest</a>, which posts a comment to a pull request at the specified line, file, or request.</p>
</li>
<li>
<p>
<a>UpdatePullRequestApprovalRuleContent</a>, which updates the structure of an approval rule for a pull request.</p>
</li>
<li>
<p>
<a>UpdatePullRequestApprovalState</a>, which updates the state of an approval on a pull request.</p>
</li>
<li>
<p>
<a>UpdatePullRequestDescription</a>, which updates the description of a pull request.</p>
</li>
<li>
<p>
<a>UpdatePullRequestStatus</a>, which updates the status of a pull request.</p>
</li>
<li>
<p>
<a>UpdatePullRequestTitle</a>, which updates the title of a pull request.</p>
</li>
</ul>
<p>Approval rule templates, by calling the following:</p>
<ul>
<li>
<p>
<a>AssociateApprovalRuleTemplateWithRepository</a>, which associates a template
with a specified repository. After the template is associated with a repository,
CodeCommit creates approval rules that match the template conditions on
every pull request created in the specified repository.</p>
</li>
<li>
<p>
<a>BatchAssociateApprovalRuleTemplateWithRepositories</a>, which associates a
template with one or more specified repositories. After the template is
associated with a repository, CodeCommit creates approval rules that match
the template conditions on every pull request created in the specified
repositories.</p>
</li>
<li>
<p>
<a>BatchDisassociateApprovalRuleTemplateFromRepositories</a>, which removes the
association between a template and specified repositories so that approval rules
based on the template are not automatically created when pull requests are
created in those repositories.</p>
</li>
<li>
<p>
<a>CreateApprovalRuleTemplate</a>, which creates a template for approval rules that can then be associated with one or more repositories
in your Amazon Web Services account.</p>
</li>
<li>
<p>
<a>DeleteApprovalRuleTemplate</a>, which deletes the specified template. It does not remove approval rules on pull requests already created with the template.</p>
</li>
<li>
<p>
<a>DisassociateApprovalRuleTemplateFromRepository</a>, which removes the
association between a template and a repository so that approval rules based on
the template are not automatically created when pull requests are created in the
specified repository.</p>
</li>
<li>
<p>
<a>GetApprovalRuleTemplate</a>, which returns information about an approval rule template.</p>
</li>
<li>
<p>
<a>ListApprovalRuleTemplates</a>, which lists all approval rule templates in the Amazon Web Services Region in your Amazon Web Services account.</p>
</li>
<li>
<p>
<a>ListAssociatedApprovalRuleTemplatesForRepository</a>, which lists all approval rule templates that are associated with a specified repository.</p>
</li>
<li>
<p>
<a>ListRepositoriesForApprovalRuleTemplate</a>, which lists all repositories associated with the specified approval rule template.</p>
</li>
<li>
<p>
<a>UpdateApprovalRuleTemplateDescription</a>, which updates the description of an
approval rule template.</p>
</li>
<li>
<p>
<a>UpdateApprovalRuleTemplateName</a>, which updates the name of an approval rule template.</p>
</li>
<li>
<p>
<a>UpdateApprovalRuleTemplateContent</a>, which updates the content of an approval rule template.</p>
</li>
</ul>
<p>Comments in a repository, by calling the following:</p>
<ul>
<li>
<p>
<a>DeleteCommentContent</a>, which deletes the content of a comment on a commit in a repository.</p>
</li>
<li>
<p>
<a>GetComment</a>, which returns information about a comment on a commit.</p>
</li>
<li>
<p>
<a>GetCommentReactions</a>, which returns information about emoji reactions to comments.</p>
</li>
<li>
<p>
<a>GetCommentsForComparedCommit</a>, which returns information about comments on the comparison between two commit specifiers
in a repository.</p>
</li>
<li>
<p>
<a>PostCommentForComparedCommit</a>, which creates a comment on the comparison between two commit specifiers in a repository.</p>
</li>
<li>
<p>
<a>PostCommentReply</a>, which creates a reply to a comment.</p>
</li>
<li>
<p>
<a>PutCommentReaction</a>, which creates or updates an emoji reaction to a comment.</p>
</li>
<li>
<p>
<a>UpdateComment</a>, which updates the content of a comment on a commit in a repository.</p>
</li>
</ul>
<p>Tags used to tag resources in CodeCommit (not Git tags), by calling the following:</p>
<ul>
<li>
<p>
<a>ListTagsForResource</a>, which gets information about Amazon Web Servicestags for a specified Amazon Resource Name (ARN) in CodeCommit.</p>
</li>
<li>
<p>
<a>TagResource</a>, which adds or updates tags for a resource in CodeCommit.</p>
</li>
<li>
<p>
<a>UntagResource</a>, which removes tags for a resource in CodeCommit.</p>
</li>
</ul>
<p>Triggers, by calling the following:</p>
<ul>
<li>
<p>
<a>GetRepositoryTriggers</a>, which returns information about triggers configured
for a repository.</p>
</li>
<li>
<p>
<a>PutRepositoryTriggers</a>, which replaces all triggers for a repository and can
be used to create or delete triggers.</p>
</li>
<li>
<p>
<a>TestRepositoryTriggers</a>, which tests the functionality of a repository trigger
by sending data to the trigger target.</p>
</li>
</ul>
<p>For information about how to use CodeCommit, see the <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">CodeCommit User Guide</a>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-codecommit
using your favorite package manager:

- `npm install @aws-sdk/client-codecommit`
- `yarn add @aws-sdk/client-codecommit`
- `pnpm add @aws-sdk/client-codecommit`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CodeCommitClient` and
the commands you need, for example `ListRepositoriesCommand`:

```js
// ES5 example
const { CodeCommitClient, ListRepositoriesCommand } = require("@aws-sdk/client-codecommit");
```

```ts
// ES6+ example
import { CodeCommitClient, ListRepositoriesCommand } from "@aws-sdk/client-codecommit";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new CodeCommitClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListRepositoriesCommand(params);
```

#### Async/await

We recommend using [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
operator to wait for the promise returned by send operation as follows:

```js
// async/await.
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  // error handling.
} finally {
  // finally.
}
```

Async-await is clean, concise, intuitive, easy to debug and has better error handling
as compared to using Promise chains or callbacks.

#### Promises

You can also use [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining)
to execute send operation.

```js
client.send(command).then(
  (data) => {
    // process data.
  },
  (error) => {
    // error handling.
  }
);
```

Promises can also be called using `.catch()` and `.finally()` as follows:

```js
client
  .send(command)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  })
  .finally(() => {
    // finally.
  });
```

#### Callbacks

We do not recommend using callbacks because of [callback hell](http://callbackhell.com/),
but they are supported by the send operation.

```js
// callbacks.
client.send(command, (err, data) => {
  // process err and data.
});
```

#### v2 compatible style

The client can also send requests using v2 compatible style.
However, it results in a bigger bundle size and may be dropped in next major version. More details in the blog post
on [modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/)

```ts
import * as AWS from "@aws-sdk/client-codecommit";
const client = new AWS.CodeCommit({ region: "REGION" });

// async/await.
try {
  const data = await client.listRepositories(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listRepositories(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listRepositories(params, (err, data) => {
  // process err and data.
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information,
as well as response metadata (e.g. request id).

```js
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  const { requestId, cfId, extendedRequestId } = error.$metadata;
  console.log({ requestId, cfId, extendedRequestId });
  /**
   * The keys within exceptions are also parsed.
   * You can access them by specifying exception names:
   * if (error.name === 'SomeServiceException') {
   *     const value = error.specialKeyInException;
   * }
   */
}
```

## Getting Help

Please use these community resources for getting help.
We use the GitHub issues for tracking bugs and feature requests, but have limited bandwidth to address them.

- Visit [Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
  or [API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html).
- Check out the blog posts tagged with [`aws-sdk-js`](https://aws.amazon.com/blogs/developer/tag/aws-sdk-js/)
  on AWS Developer Blog.
- Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with `aws-sdk-js`.
- Join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3).
- If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues/new/choose).

To test your universal JavaScript code in Node.js, browser and react-native environments,
visit our [code samples repo](https://github.com/aws-samples/aws-sdk-js-tests).

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-codecommit` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateApprovalRuleTemplateWithRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/AssociateApprovalRuleTemplateWithRepositoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/AssociateApprovalRuleTemplateWithRepositoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/AssociateApprovalRuleTemplateWithRepositoryCommandOutput/)

</details>
<details>
<summary>
BatchAssociateApprovalRuleTemplateWithRepositories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/BatchAssociateApprovalRuleTemplateWithRepositoriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput/)

</details>
<details>
<summary>
BatchDescribeMergeConflicts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/BatchDescribeMergeConflictsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/BatchDescribeMergeConflictsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/BatchDescribeMergeConflictsCommandOutput/)

</details>
<details>
<summary>
BatchDisassociateApprovalRuleTemplateFromRepositories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput/)

</details>
<details>
<summary>
BatchGetCommits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/BatchGetCommitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/BatchGetCommitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/BatchGetCommitsCommandOutput/)

</details>
<details>
<summary>
BatchGetRepositories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/BatchGetRepositoriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/BatchGetRepositoriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/BatchGetRepositoriesCommandOutput/)

</details>
<details>
<summary>
CreateApprovalRuleTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/CreateApprovalRuleTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/CreateApprovalRuleTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/CreateApprovalRuleTemplateCommandOutput/)

</details>
<details>
<summary>
CreateBranch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/CreateBranchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/CreateBranchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/CreateBranchCommandOutput/)

</details>
<details>
<summary>
CreateCommit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/CreateCommitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/CreateCommitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/CreateCommitCommandOutput/)

</details>
<details>
<summary>
CreatePullRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/CreatePullRequestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/CreatePullRequestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/CreatePullRequestCommandOutput/)

</details>
<details>
<summary>
CreatePullRequestApprovalRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/CreatePullRequestApprovalRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/CreatePullRequestApprovalRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/CreatePullRequestApprovalRuleCommandOutput/)

</details>
<details>
<summary>
CreateRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/CreateRepositoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/CreateRepositoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/CreateRepositoryCommandOutput/)

</details>
<details>
<summary>
CreateUnreferencedMergeCommit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/CreateUnreferencedMergeCommitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/CreateUnreferencedMergeCommitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/CreateUnreferencedMergeCommitCommandOutput/)

</details>
<details>
<summary>
DeleteApprovalRuleTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/DeleteApprovalRuleTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/DeleteApprovalRuleTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/DeleteApprovalRuleTemplateCommandOutput/)

</details>
<details>
<summary>
DeleteBranch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/DeleteBranchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/DeleteBranchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/DeleteBranchCommandOutput/)

</details>
<details>
<summary>
DeleteCommentContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/DeleteCommentContentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/DeleteCommentContentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/DeleteCommentContentCommandOutput/)

</details>
<details>
<summary>
DeleteFile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/DeleteFileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/DeleteFileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/DeleteFileCommandOutput/)

</details>
<details>
<summary>
DeletePullRequestApprovalRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/DeletePullRequestApprovalRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/DeletePullRequestApprovalRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/DeletePullRequestApprovalRuleCommandOutput/)

</details>
<details>
<summary>
DeleteRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/DeleteRepositoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/DeleteRepositoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/DeleteRepositoryCommandOutput/)

</details>
<details>
<summary>
DescribeMergeConflicts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/DescribeMergeConflictsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/DescribeMergeConflictsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/DescribeMergeConflictsCommandOutput/)

</details>
<details>
<summary>
DescribePullRequestEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/DescribePullRequestEventsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/DescribePullRequestEventsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/DescribePullRequestEventsCommandOutput/)

</details>
<details>
<summary>
DisassociateApprovalRuleTemplateFromRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/DisassociateApprovalRuleTemplateFromRepositoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/DisassociateApprovalRuleTemplateFromRepositoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/DisassociateApprovalRuleTemplateFromRepositoryCommandOutput/)

</details>
<details>
<summary>
EvaluatePullRequestApprovalRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/EvaluatePullRequestApprovalRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/EvaluatePullRequestApprovalRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/EvaluatePullRequestApprovalRulesCommandOutput/)

</details>
<details>
<summary>
GetApprovalRuleTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/GetApprovalRuleTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetApprovalRuleTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetApprovalRuleTemplateCommandOutput/)

</details>
<details>
<summary>
GetBlob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/GetBlobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetBlobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetBlobCommandOutput/)

</details>
<details>
<summary>
GetBranch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/GetBranchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetBranchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetBranchCommandOutput/)

</details>
<details>
<summary>
GetComment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/GetCommentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetCommentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetCommentCommandOutput/)

</details>
<details>
<summary>
GetCommentReactions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/GetCommentReactionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetCommentReactionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetCommentReactionsCommandOutput/)

</details>
<details>
<summary>
GetCommentsForComparedCommit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/GetCommentsForComparedCommitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetCommentsForComparedCommitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetCommentsForComparedCommitCommandOutput/)

</details>
<details>
<summary>
GetCommentsForPullRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/GetCommentsForPullRequestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetCommentsForPullRequestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetCommentsForPullRequestCommandOutput/)

</details>
<details>
<summary>
GetCommit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/GetCommitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetCommitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetCommitCommandOutput/)

</details>
<details>
<summary>
GetDifferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/GetDifferencesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetDifferencesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetDifferencesCommandOutput/)

</details>
<details>
<summary>
GetFile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/GetFileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetFileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetFileCommandOutput/)

</details>
<details>
<summary>
GetFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/GetFolderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetFolderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetFolderCommandOutput/)

</details>
<details>
<summary>
GetMergeCommit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/GetMergeCommitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetMergeCommitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetMergeCommitCommandOutput/)

</details>
<details>
<summary>
GetMergeConflicts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/GetMergeConflictsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetMergeConflictsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetMergeConflictsCommandOutput/)

</details>
<details>
<summary>
GetMergeOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/GetMergeOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetMergeOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetMergeOptionsCommandOutput/)

</details>
<details>
<summary>
GetPullRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/GetPullRequestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetPullRequestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetPullRequestCommandOutput/)

</details>
<details>
<summary>
GetPullRequestApprovalStates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/GetPullRequestApprovalStatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetPullRequestApprovalStatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetPullRequestApprovalStatesCommandOutput/)

</details>
<details>
<summary>
GetPullRequestOverrideState
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/GetPullRequestOverrideStateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetPullRequestOverrideStateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetPullRequestOverrideStateCommandOutput/)

</details>
<details>
<summary>
GetRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/GetRepositoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetRepositoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetRepositoryCommandOutput/)

</details>
<details>
<summary>
GetRepositoryTriggers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/GetRepositoryTriggersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetRepositoryTriggersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/GetRepositoryTriggersCommandOutput/)

</details>
<details>
<summary>
ListApprovalRuleTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/ListApprovalRuleTemplatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/ListApprovalRuleTemplatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/ListApprovalRuleTemplatesCommandOutput/)

</details>
<details>
<summary>
ListAssociatedApprovalRuleTemplatesForRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/ListAssociatedApprovalRuleTemplatesForRepositoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput/)

</details>
<details>
<summary>
ListBranches
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/ListBranchesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/ListBranchesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/ListBranchesCommandOutput/)

</details>
<details>
<summary>
ListFileCommitHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/ListFileCommitHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/ListFileCommitHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/ListFileCommitHistoryCommandOutput/)

</details>
<details>
<summary>
ListPullRequests
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/ListPullRequestsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/ListPullRequestsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/ListPullRequestsCommandOutput/)

</details>
<details>
<summary>
ListRepositories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/ListRepositoriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/ListRepositoriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/ListRepositoriesCommandOutput/)

</details>
<details>
<summary>
ListRepositoriesForApprovalRuleTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/ListRepositoriesForApprovalRuleTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/ListRepositoriesForApprovalRuleTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/ListRepositoriesForApprovalRuleTemplateCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
MergeBranchesByFastForward
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/MergeBranchesByFastForwardCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/MergeBranchesByFastForwardCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/MergeBranchesByFastForwardCommandOutput/)

</details>
<details>
<summary>
MergeBranchesBySquash
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/MergeBranchesBySquashCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/MergeBranchesBySquashCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/MergeBranchesBySquashCommandOutput/)

</details>
<details>
<summary>
MergeBranchesByThreeWay
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/MergeBranchesByThreeWayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/MergeBranchesByThreeWayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/MergeBranchesByThreeWayCommandOutput/)

</details>
<details>
<summary>
MergePullRequestByFastForward
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/MergePullRequestByFastForwardCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/MergePullRequestByFastForwardCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/MergePullRequestByFastForwardCommandOutput/)

</details>
<details>
<summary>
MergePullRequestBySquash
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/MergePullRequestBySquashCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/MergePullRequestBySquashCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/MergePullRequestBySquashCommandOutput/)

</details>
<details>
<summary>
MergePullRequestByThreeWay
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/MergePullRequestByThreeWayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/MergePullRequestByThreeWayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/MergePullRequestByThreeWayCommandOutput/)

</details>
<details>
<summary>
OverridePullRequestApprovalRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/OverridePullRequestApprovalRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/OverridePullRequestApprovalRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/OverridePullRequestApprovalRulesCommandOutput/)

</details>
<details>
<summary>
PostCommentForComparedCommit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/PostCommentForComparedCommitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/PostCommentForComparedCommitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/PostCommentForComparedCommitCommandOutput/)

</details>
<details>
<summary>
PostCommentForPullRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/PostCommentForPullRequestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/PostCommentForPullRequestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/PostCommentForPullRequestCommandOutput/)

</details>
<details>
<summary>
PostCommentReply
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/PostCommentReplyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/PostCommentReplyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/PostCommentReplyCommandOutput/)

</details>
<details>
<summary>
PutCommentReaction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/PutCommentReactionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/PutCommentReactionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/PutCommentReactionCommandOutput/)

</details>
<details>
<summary>
PutFile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/PutFileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/PutFileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/PutFileCommandOutput/)

</details>
<details>
<summary>
PutRepositoryTriggers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/PutRepositoryTriggersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/PutRepositoryTriggersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/PutRepositoryTriggersCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
TestRepositoryTriggers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/TestRepositoryTriggersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/TestRepositoryTriggersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/TestRepositoryTriggersCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateApprovalRuleTemplateContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/UpdateApprovalRuleTemplateContentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdateApprovalRuleTemplateContentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdateApprovalRuleTemplateContentCommandOutput/)

</details>
<details>
<summary>
UpdateApprovalRuleTemplateDescription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/UpdateApprovalRuleTemplateDescriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdateApprovalRuleTemplateDescriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdateApprovalRuleTemplateDescriptionCommandOutput/)

</details>
<details>
<summary>
UpdateApprovalRuleTemplateName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/UpdateApprovalRuleTemplateNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdateApprovalRuleTemplateNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdateApprovalRuleTemplateNameCommandOutput/)

</details>
<details>
<summary>
UpdateComment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/UpdateCommentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdateCommentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdateCommentCommandOutput/)

</details>
<details>
<summary>
UpdateDefaultBranch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/UpdateDefaultBranchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdateDefaultBranchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdateDefaultBranchCommandOutput/)

</details>
<details>
<summary>
UpdatePullRequestApprovalRuleContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/UpdatePullRequestApprovalRuleContentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdatePullRequestApprovalRuleContentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdatePullRequestApprovalRuleContentCommandOutput/)

</details>
<details>
<summary>
UpdatePullRequestApprovalState
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/UpdatePullRequestApprovalStateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdatePullRequestApprovalStateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdatePullRequestApprovalStateCommandOutput/)

</details>
<details>
<summary>
UpdatePullRequestDescription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/UpdatePullRequestDescriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdatePullRequestDescriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdatePullRequestDescriptionCommandOutput/)

</details>
<details>
<summary>
UpdatePullRequestStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/UpdatePullRequestStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdatePullRequestStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdatePullRequestStatusCommandOutput/)

</details>
<details>
<summary>
UpdatePullRequestTitle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/UpdatePullRequestTitleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdatePullRequestTitleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdatePullRequestTitleCommandOutput/)

</details>
<details>
<summary>
UpdateRepositoryDescription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/UpdateRepositoryDescriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdateRepositoryDescriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdateRepositoryDescriptionCommandOutput/)

</details>
<details>
<summary>
UpdateRepositoryEncryptionKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/UpdateRepositoryEncryptionKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdateRepositoryEncryptionKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdateRepositoryEncryptionKeyCommandOutput/)

</details>
<details>
<summary>
UpdateRepositoryName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecommit/command/UpdateRepositoryNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdateRepositoryNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecommit/Interface/UpdateRepositoryNameCommandOutput/)

</details>
