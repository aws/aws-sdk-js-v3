### Issue
Issue number, if available, prefixed with "#"

### Description
What does this implement/fix? Explain your changes.

### Testing
How was this change tested?

### Checklist
- [ ] If the PR is a feature, add integration tests (`*.integ.spec.ts`) or E2E tests.
  - [ ] It's not a feature.
- [ ] My E2E tests are resilient to concurrent i/o.
  - [ ] I didn't write any E2E tests.
- [ ] I added access level annotations e.g. `@public`, `@internal` tags and enabled doc generation on the package. Remember that access level annotations go below the description, not above.
  - [ ] I didn't add any public functions.
- [ ] Streams - how do they work?? My WebStream readers/locks are properly lifecycled. Node.js stream backpressure is handled. Error handling.
  - [ ] No streams here.

---
By submitting this pull request, I confirm that you can use, modify, copy, and redistribute this contribution, under the terms of your choice.
