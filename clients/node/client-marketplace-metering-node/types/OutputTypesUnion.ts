import { BatchMeterUsageOutput } from "./BatchMeterUsageOutput";
import { MeterUsageOutput } from "./MeterUsageOutput";
import { RegisterUsageOutput } from "./RegisterUsageOutput";
import { ResolveCustomerOutput } from "./ResolveCustomerOutput";
export type OutputTypesUnion =
  | BatchMeterUsageOutput
  | MeterUsageOutput
  | RegisterUsageOutput
  | ResolveCustomerOutput;
