# AWS Models

This repository contains shared JSON models used by the AWS SDK team.

# Git Branches

There are two types of branches you'll need to know about in the
``aws/aws-models`` repo.

### master

The **master** branch should only contain publicly released features.
You should be able to release everything in the master branch at any
point in time.  Never merge anything into master that isn't already
public.

### release/YYYY-MM-DD

A release branch represents all the changes for an upcoming
release.  If you are a feature owner for an upcoming release,
you will send a pull request to this release branch with your
approved model.  This branch is created by the on call handling
the release.

The release branch will contain unreleased changes.  You cannot assume that
models in the release branch are safe to publicly release at any given time.

### feature/serviceident-SIM-num

In addition to the two types of branches above, you'll also create feature
branches **in your own fork of aws/aws-models**.

Feature branches are used by feature owners to track approved models.
The naming convention for feature branches is: `feature/service-ident-SIM-name`
Here's a few examples:

* `feature/cloudhsm-API-159`
* `feature/codedeploy-API-130`
* `feature/directoryservice-API-132`
* `feature/dms-API-139`
* `feature/elasticache-API-13`
* `feature/elasticbeanstalk-API-12`

You should push to a feature branch to your own fork when you have approved a
model.  These branches should not be in the main `aws/aws-models` repo.
They should reside in your own fork of this repo.

# Workflow

```
                    o feature/acm-API-12
feature/s3-API-11    \
                  o   \
feature/ec2-API-10 \   \
                o   \   \
                 \   \   \
               ---o---o---o--------- release/2016-06-01
             /                      \
            o------------------------o  master
            |                        |
         Previous                  Latest
         Release                   Release


```

## Feature Owner

1. Once you've approved a model, push it to a feature branch using the naming
   convention described above (`feature/serviceident-SIM-num`).
2. Once the release branch has been created by the on call (usually
   a few days before the release), send pull requests from your feature
   branch to the release branch.


## SDK On Call

1. Create a release branch using the naming convention described above
   (`release/YYYY-MM-DD`) a day before the release.
2. Accept and merge pull requests from feature owners from their feature
   branch to the release branch you've created.  Ensure they do **not**
   send any pull requests to the master branch.
3. Once you receive the green light to release the SDKs, on the day of the
   release, merge the release branch you created in step 1 to the master branch
   (`release/YYYY-MM-DD -> master`).  Once you've merged the release branch
   to master, delete the release branch.  It's no longer needed.


## Person doing SDK specific release

1. Watch the master branch for commits.  Once you see a commit to the master
   branch you are free to push your SDK release.


Note: Use merge commits (and not fast forward merges) when merging branches.
Merging from release to master should happen when we are given the green light
to release, and a merge commit gives visibility into when a merge occurred as
well as who performed the merge.
