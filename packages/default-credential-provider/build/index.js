"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var credential_provider_base_1 = require("@aws/credential-provider-base");
var credential_provider_env_1 = require("@aws/credential-provider-env");
var credential_provider_imds_1 = require("@aws/credential-provider-imds");
var credential_provider_ini_1 = require("@aws/credential-provider-ini");
/**
 * Creates a credential provider that will attempt to find credentials from the
 * following sources (listed in order of precedence):
 *   * Environment variables exposed via `process.env`
 *   * Shared credentials and config ini files
 *   * The EC2/ECS Instance Metadata Service
 *
 * The default credential provider will invoke one provider at a time and only
 * continue to the next if no credentials have been located. For example, if
 * the process finds values defined via the `AWS_ACCESS_KEY_ID` and
 * `AWS_SECRET_ACCESS_KEY` environment variables, the files at
 * `~/.aws/credentials` and `~/.aws/config` will not be read, nor will any
 * messages be sent to the Instance Metadata Service.
 *
 * @param init                  Configuration that is passed to each individual
 *                              provider
 *
 * @see fromEnv                 The function used to source credentials from
 *                              environment variables
 * @see fromIni                 The function used to source credentials from INI
 *                              files
 * @see fromInstanceMetadata    The function used to source credentials from the
 *                              EC2 Instance Metadata Service
 * @see fromContainerMetadata   The function used to source credentials from the
 *                              ECS Container Metadata Service
 */
function defaultProvider(init) {
    if (init === void 0) { init = {}; }
    return credential_provider_base_1.memoize(credential_provider_base_1.chain(credential_provider_env_1.fromEnv(), credential_provider_ini_1.fromIni(init), process.env[credential_provider_imds_1.ENV_CMDS_RELATIVE_URI] || process.env[credential_provider_imds_1.ENV_CMDS_FULL_URI]
        ? credential_provider_imds_1.fromContainerMetadata(init)
        : credential_provider_imds_1.fromInstanceMetadata(init)));
}
exports.defaultProvider = defaultProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwRUFBNkQ7QUFDN0Qsd0VBQXFEO0FBQ3JELDBFQU91QztBQUN2Qyx3RUFBa0U7QUFHbEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Qkc7QUFDSCx5QkFDSSxJQUFxRTtJQUFyRSxxQkFBQSxFQUFBLFNBQXFFO0lBRXJFLE1BQU0sQ0FBQyxrQ0FBTyxDQUFDLGdDQUFLLENBQ2hCLGlDQUFPLEVBQUUsRUFDVCxpQ0FBTyxDQUFDLElBQUksQ0FBQyxFQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0RBQXFCLENBQUMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUFpQixDQUFDO1VBQzlELGdEQUFxQixDQUFDLElBQUksQ0FBQztVQUMzQiwrQ0FBb0IsQ0FBQyxJQUFJLENBQUMsQ0FDbkMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVZELDBDQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjaGFpbiwgbWVtb2l6ZX0gZnJvbSAnQGF3cy9jcmVkZW50aWFsLXByb3ZpZGVyLWJhc2UnO1xuaW1wb3J0IHtmcm9tRW52fSBmcm9tICdAYXdzL2NyZWRlbnRpYWwtcHJvdmlkZXItZW52JztcbmltcG9ydCB7XG4gICAgRWMySW5zdGFuY2VNZXRhZGF0YUluaXQsXG4gICAgRU5WX0NNRFNfRlVMTF9VUkksXG4gICAgRU5WX0NNRFNfUkVMQVRJVkVfVVJJLFxuICAgIGZyb21Db250YWluZXJNZXRhZGF0YSxcbiAgICBmcm9tSW5zdGFuY2VNZXRhZGF0YSxcbiAgICBSZW1vdGVQcm92aWRlckluaXQsXG59IGZyb20gJ0Bhd3MvY3JlZGVudGlhbC1wcm92aWRlci1pbWRzJztcbmltcG9ydCB7ZnJvbUluaSwgRnJvbUluaUluaXR9IGZyb20gJ0Bhd3MvY3JlZGVudGlhbC1wcm92aWRlci1pbmknO1xuaW1wb3J0IHtDcmVkZW50aWFsUHJvdmlkZXJ9IGZyb20gJ0Bhd3MvdHlwZXMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjcmVkZW50aWFsIHByb3ZpZGVyIHRoYXQgd2lsbCBhdHRlbXB0IHRvIGZpbmQgY3JlZGVudGlhbHMgZnJvbSB0aGVcbiAqIGZvbGxvd2luZyBzb3VyY2VzIChsaXN0ZWQgaW4gb3JkZXIgb2YgcHJlY2VkZW5jZSk6XG4gKiAgICogRW52aXJvbm1lbnQgdmFyaWFibGVzIGV4cG9zZWQgdmlhIGBwcm9jZXNzLmVudmBcbiAqICAgKiBTaGFyZWQgY3JlZGVudGlhbHMgYW5kIGNvbmZpZyBpbmkgZmlsZXNcbiAqICAgKiBUaGUgRUMyL0VDUyBJbnN0YW5jZSBNZXRhZGF0YSBTZXJ2aWNlXG4gKlxuICogVGhlIGRlZmF1bHQgY3JlZGVudGlhbCBwcm92aWRlciB3aWxsIGludm9rZSBvbmUgcHJvdmlkZXIgYXQgYSB0aW1lIGFuZCBvbmx5XG4gKiBjb250aW51ZSB0byB0aGUgbmV4dCBpZiBubyBjcmVkZW50aWFscyBoYXZlIGJlZW4gbG9jYXRlZC4gRm9yIGV4YW1wbGUsIGlmXG4gKiB0aGUgcHJvY2VzcyBmaW5kcyB2YWx1ZXMgZGVmaW5lZCB2aWEgdGhlIGBBV1NfQUNDRVNTX0tFWV9JRGAgYW5kXG4gKiBgQVdTX1NFQ1JFVF9BQ0NFU1NfS0VZYCBlbnZpcm9ubWVudCB2YXJpYWJsZXMsIHRoZSBmaWxlcyBhdFxuICogYH4vLmF3cy9jcmVkZW50aWFsc2AgYW5kIGB+Ly5hd3MvY29uZmlnYCB3aWxsIG5vdCBiZSByZWFkLCBub3Igd2lsbCBhbnlcbiAqIG1lc3NhZ2VzIGJlIHNlbnQgdG8gdGhlIEluc3RhbmNlIE1ldGFkYXRhIFNlcnZpY2UuXG4gKlxuICogQHBhcmFtIGluaXQgICAgICAgICAgICAgICAgICBDb25maWd1cmF0aW9uIHRoYXQgaXMgcGFzc2VkIHRvIGVhY2ggaW5kaXZpZHVhbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlclxuICpcbiAqIEBzZWUgZnJvbUVudiAgICAgICAgICAgICAgICAgVGhlIGZ1bmN0aW9uIHVzZWQgdG8gc291cmNlIGNyZWRlbnRpYWxzIGZyb21cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW52aXJvbm1lbnQgdmFyaWFibGVzXG4gKiBAc2VlIGZyb21JbmkgICAgICAgICAgICAgICAgIFRoZSBmdW5jdGlvbiB1c2VkIHRvIHNvdXJjZSBjcmVkZW50aWFscyBmcm9tIElOSVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlc1xuICogQHNlZSBmcm9tSW5zdGFuY2VNZXRhZGF0YSAgICBUaGUgZnVuY3Rpb24gdXNlZCB0byBzb3VyY2UgY3JlZGVudGlhbHMgZnJvbSB0aGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRUMyIEluc3RhbmNlIE1ldGFkYXRhIFNlcnZpY2VcbiAqIEBzZWUgZnJvbUNvbnRhaW5lck1ldGFkYXRhICAgVGhlIGZ1bmN0aW9uIHVzZWQgdG8gc291cmNlIGNyZWRlbnRpYWxzIGZyb20gdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVDUyBDb250YWluZXIgTWV0YWRhdGEgU2VydmljZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFByb3ZpZGVyKFxuICAgIGluaXQ6IEVjMkluc3RhbmNlTWV0YWRhdGFJbml0ICYgRnJvbUluaUluaXQgJiBSZW1vdGVQcm92aWRlckluaXQgPSB7fVxuKTogQ3JlZGVudGlhbFByb3ZpZGVyIHtcbiAgICByZXR1cm4gbWVtb2l6ZShjaGFpbihcbiAgICAgICAgZnJvbUVudigpLFxuICAgICAgICBmcm9tSW5pKGluaXQpLFxuICAgICAgICBwcm9jZXNzLmVudltFTlZfQ01EU19SRUxBVElWRV9VUkldIHx8IHByb2Nlc3MuZW52W0VOVl9DTURTX0ZVTExfVVJJXVxuICAgICAgICAgICAgPyBmcm9tQ29udGFpbmVyTWV0YWRhdGEoaW5pdClcbiAgICAgICAgICAgIDogZnJvbUluc3RhbmNlTWV0YWRhdGEoaW5pdClcbiAgICApKTtcbn1cbiJdfQ==