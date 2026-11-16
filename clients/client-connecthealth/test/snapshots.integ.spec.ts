// smithy-typescript generated code
import { SnapshotRunner } from "@smithy/snapshot-testing";
import { join } from "node:path";
import { describe, expect, test as it, vi } from "vitest";

import {
  AccessDeniedException$,
  ActivateSubscription$,
  ActivateSubscriptionCommand,
  ConflictException$,
  ConnectHealthClient,
  CreateDataset$,
  CreateDatasetCommand,
  CreateDomain$,
  CreateDomainCommand,
  CreateSubscription$,
  CreateSubscriptionCommand,
  DeactivateSubscription$,
  DeactivateSubscriptionCommand,
  DeleteDataset$,
  DeleteDatasetCommand,
  DeleteDomain$,
  DeleteDomainCommand,
  GetDataset$,
  GetDatasetCommand,
  GetDomain$,
  GetDomainCommand,
  GetMedicalCodingJob$,
  GetMedicalCodingJobCommand,
  GetMedicalScribeListeningSession$,
  GetMedicalScribeListeningSessionCommand,
  GetPatientInsightsJob$,
  GetPatientInsightsJobCommand,
  GetSubscription$,
  GetSubscriptionCommand,
  InternalServerException$,
  ListDatasets$,
  ListDatasetsCommand,
  ListDomains$,
  ListDomainsCommand,
  ListSubscriptions$,
  ListSubscriptionsCommand,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ResourceNotFoundException$,
  ServiceQuotaExceededException$,
  StartMedicalCodingJob$,
  StartMedicalCodingJobCommand,
  StartMedicalScribeListeningSession$,
  StartMedicalScribeListeningSessionCommand,
  StartPatientInsightsJob$,
  StartPatientInsightsJobCommand,
  SubmitFeedback$,
  SubmitFeedbackCommand,
  TagResource$,
  TagResourceCommand,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  ValidationException$,
} from "../src";

vi.setSystemTime(new Date(946702799999));
const Client = ConnectHealthClient;

const mode = (process.env.SNAPSHOT_MODE as "write" | "compare") ?? "write";

describe("ConnectHealthClient" + ` (${mode})`, () => {
  const runner = new SnapshotRunner({
    snapshotDirPath: join(__dirname, "snapshots"),
    Client,
    mode,
    testCase(caseName: string, run: () => Promise<void>) {
      it(caseName, run);
    },
    assertions(caseName: string, expected: string, actual: string): Promise<void> {
      expect(actual).toEqual(expected);
      return Promise.resolve();
    },
    schemas: new Map<any, any>([
      [ActivateSubscription$, ActivateSubscriptionCommand],
      [CreateDataset$, CreateDatasetCommand],
      [CreateDomain$, CreateDomainCommand],
      [CreateSubscription$, CreateSubscriptionCommand],
      [DeactivateSubscription$, DeactivateSubscriptionCommand],
      [DeleteDataset$, DeleteDatasetCommand],
      [DeleteDomain$, DeleteDomainCommand],
      [GetDataset$, GetDatasetCommand],
      [GetDomain$, GetDomainCommand],
      [GetMedicalCodingJob$, GetMedicalCodingJobCommand],
      [GetMedicalScribeListeningSession$, GetMedicalScribeListeningSessionCommand],
      [GetPatientInsightsJob$, GetPatientInsightsJobCommand],
      [GetSubscription$, GetSubscriptionCommand],
      [ListDatasets$, ListDatasetsCommand],
      [ListDomains$, ListDomainsCommand],
      [ListSubscriptions$, ListSubscriptionsCommand],
      [ListTagsForResource$, ListTagsForResourceCommand],
      [StartMedicalCodingJob$, StartMedicalCodingJobCommand],
      [StartMedicalScribeListeningSession$, StartMedicalScribeListeningSessionCommand],
      [StartPatientInsightsJob$, StartPatientInsightsJobCommand],
      [SubmitFeedback$, SubmitFeedbackCommand],
      [TagResource$, TagResourceCommand],
      [UntagResource$, UntagResourceCommand],
    ]),
    errors: [
      AccessDeniedException$,
      ConflictException$,
      InternalServerException$,
      ResourceNotFoundException$,
      ServiceQuotaExceededException$,
      ThrottlingException$,
      ValidationException$,
    ],
  });
  runner.run();
}, 30_000);
