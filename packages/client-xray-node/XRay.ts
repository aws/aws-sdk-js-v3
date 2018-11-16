import {XRayClient} from './XRayClient';
import {BatchGetTracesInput} from './types/BatchGetTracesInput';
import {BatchGetTracesOutput} from './types/BatchGetTracesOutput';
import {CreateSamplingRuleInput} from './types/CreateSamplingRuleInput';
import {CreateSamplingRuleOutput} from './types/CreateSamplingRuleOutput';
import {DeleteSamplingRuleInput} from './types/DeleteSamplingRuleInput';
import {DeleteSamplingRuleOutput} from './types/DeleteSamplingRuleOutput';
import {GetEncryptionConfigInput} from './types/GetEncryptionConfigInput';
import {GetEncryptionConfigOutput} from './types/GetEncryptionConfigOutput';
import {GetSamplingRulesInput} from './types/GetSamplingRulesInput';
import {GetSamplingRulesOutput} from './types/GetSamplingRulesOutput';
import {GetSamplingStatisticSummariesInput} from './types/GetSamplingStatisticSummariesInput';
import {GetSamplingStatisticSummariesOutput} from './types/GetSamplingStatisticSummariesOutput';
import {GetSamplingTargetsInput} from './types/GetSamplingTargetsInput';
import {GetSamplingTargetsOutput} from './types/GetSamplingTargetsOutput';
import {GetServiceGraphInput} from './types/GetServiceGraphInput';
import {GetServiceGraphOutput} from './types/GetServiceGraphOutput';
import {GetTraceGraphInput} from './types/GetTraceGraphInput';
import {GetTraceGraphOutput} from './types/GetTraceGraphOutput';
import {GetTraceSummariesInput} from './types/GetTraceSummariesInput';
import {GetTraceSummariesOutput} from './types/GetTraceSummariesOutput';
import {InvalidRequestException} from './types/InvalidRequestException';
import {PutEncryptionConfigInput} from './types/PutEncryptionConfigInput';
import {PutEncryptionConfigOutput} from './types/PutEncryptionConfigOutput';
import {PutTelemetryRecordsInput} from './types/PutTelemetryRecordsInput';
import {PutTelemetryRecordsOutput} from './types/PutTelemetryRecordsOutput';
import {PutTraceSegmentsInput} from './types/PutTraceSegmentsInput';
import {PutTraceSegmentsOutput} from './types/PutTraceSegmentsOutput';
import {RuleLimitExceededException} from './types/RuleLimitExceededException';
import {ThrottledException} from './types/ThrottledException';
import {UpdateSamplingRuleInput} from './types/UpdateSamplingRuleInput';
import {UpdateSamplingRuleOutput} from './types/UpdateSamplingRuleOutput';
import {BatchGetTracesCommand} from './commands/BatchGetTracesCommand';
import {CreateSamplingRuleCommand} from './commands/CreateSamplingRuleCommand';
import {DeleteSamplingRuleCommand} from './commands/DeleteSamplingRuleCommand';
import {GetEncryptionConfigCommand} from './commands/GetEncryptionConfigCommand';
import {GetSamplingRulesCommand} from './commands/GetSamplingRulesCommand';
import {GetSamplingStatisticSummariesCommand} from './commands/GetSamplingStatisticSummariesCommand';
import {GetSamplingTargetsCommand} from './commands/GetSamplingTargetsCommand';
import {GetServiceGraphCommand} from './commands/GetServiceGraphCommand';
import {GetTraceGraphCommand} from './commands/GetTraceGraphCommand';
import {GetTraceSummariesCommand} from './commands/GetTraceSummariesCommand';
import {PutEncryptionConfigCommand} from './commands/PutEncryptionConfigCommand';
import {PutTelemetryRecordsCommand} from './commands/PutTelemetryRecordsCommand';
import {PutTraceSegmentsCommand} from './commands/PutTraceSegmentsCommand';
import {UpdateSamplingRuleCommand} from './commands/UpdateSamplingRuleCommand';

export class XRay extends XRayClient {
    /**
     * BatchGetTraces operation
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidRequestException} InvalidRequestException shape
     *   - {ThrottledException} ThrottledException shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public batchGetTraces(args: BatchGetTracesInput): Promise<BatchGetTracesOutput>;
    public batchGetTraces(
        args: BatchGetTracesInput,
        cb: (err: any, data?: BatchGetTracesOutput) => void
    ): void;
    public batchGetTraces(
        args: BatchGetTracesInput,
        cb?: (err: any, data?: BatchGetTracesOutput) => void
    ): Promise<BatchGetTracesOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new BatchGetTracesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * CreateSamplingRule operation
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidRequestException} InvalidRequestException shape
     *   - {ThrottledException} ThrottledException shape
     *   - {RuleLimitExceededException} RuleLimitExceededException shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public createSamplingRule(args: CreateSamplingRuleInput): Promise<CreateSamplingRuleOutput>;
    public createSamplingRule(
        args: CreateSamplingRuleInput,
        cb: (err: any, data?: CreateSamplingRuleOutput) => void
    ): void;
    public createSamplingRule(
        args: CreateSamplingRuleInput,
        cb?: (err: any, data?: CreateSamplingRuleOutput) => void
    ): Promise<CreateSamplingRuleOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CreateSamplingRuleCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * DeleteSamplingRule operation
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidRequestException} InvalidRequestException shape
     *   - {ThrottledException} ThrottledException shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteSamplingRule(args: DeleteSamplingRuleInput): Promise<DeleteSamplingRuleOutput>;
    public deleteSamplingRule(
        args: DeleteSamplingRuleInput,
        cb: (err: any, data?: DeleteSamplingRuleOutput) => void
    ): void;
    public deleteSamplingRule(
        args: DeleteSamplingRuleInput,
        cb?: (err: any, data?: DeleteSamplingRuleOutput) => void
    ): Promise<DeleteSamplingRuleOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteSamplingRuleCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetEncryptionConfig operation
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidRequestException} InvalidRequestException shape
     *   - {ThrottledException} ThrottledException shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getEncryptionConfig(args: GetEncryptionConfigInput): Promise<GetEncryptionConfigOutput>;
    public getEncryptionConfig(
        args: GetEncryptionConfigInput,
        cb: (err: any, data?: GetEncryptionConfigOutput) => void
    ): void;
    public getEncryptionConfig(
        args: GetEncryptionConfigInput,
        cb?: (err: any, data?: GetEncryptionConfigOutput) => void
    ): Promise<GetEncryptionConfigOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetEncryptionConfigCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetSamplingRules operation
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidRequestException} InvalidRequestException shape
     *   - {ThrottledException} ThrottledException shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getSamplingRules(args: GetSamplingRulesInput): Promise<GetSamplingRulesOutput>;
    public getSamplingRules(
        args: GetSamplingRulesInput,
        cb: (err: any, data?: GetSamplingRulesOutput) => void
    ): void;
    public getSamplingRules(
        args: GetSamplingRulesInput,
        cb?: (err: any, data?: GetSamplingRulesOutput) => void
    ): Promise<GetSamplingRulesOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetSamplingRulesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetSamplingStatisticSummaries operation
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidRequestException} InvalidRequestException shape
     *   - {ThrottledException} ThrottledException shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getSamplingStatisticSummaries(args: GetSamplingStatisticSummariesInput): Promise<GetSamplingStatisticSummariesOutput>;
    public getSamplingStatisticSummaries(
        args: GetSamplingStatisticSummariesInput,
        cb: (err: any, data?: GetSamplingStatisticSummariesOutput) => void
    ): void;
    public getSamplingStatisticSummaries(
        args: GetSamplingStatisticSummariesInput,
        cb?: (err: any, data?: GetSamplingStatisticSummariesOutput) => void
    ): Promise<GetSamplingStatisticSummariesOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetSamplingStatisticSummariesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetSamplingTargets operation
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidRequestException} InvalidRequestException shape
     *   - {ThrottledException} ThrottledException shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getSamplingTargets(args: GetSamplingTargetsInput): Promise<GetSamplingTargetsOutput>;
    public getSamplingTargets(
        args: GetSamplingTargetsInput,
        cb: (err: any, data?: GetSamplingTargetsOutput) => void
    ): void;
    public getSamplingTargets(
        args: GetSamplingTargetsInput,
        cb?: (err: any, data?: GetSamplingTargetsOutput) => void
    ): Promise<GetSamplingTargetsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetSamplingTargetsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetServiceGraph operation
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidRequestException} InvalidRequestException shape
     *   - {ThrottledException} ThrottledException shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getServiceGraph(args: GetServiceGraphInput): Promise<GetServiceGraphOutput>;
    public getServiceGraph(
        args: GetServiceGraphInput,
        cb: (err: any, data?: GetServiceGraphOutput) => void
    ): void;
    public getServiceGraph(
        args: GetServiceGraphInput,
        cb?: (err: any, data?: GetServiceGraphOutput) => void
    ): Promise<GetServiceGraphOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetServiceGraphCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetTraceGraph operation
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidRequestException} InvalidRequestException shape
     *   - {ThrottledException} ThrottledException shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getTraceGraph(args: GetTraceGraphInput): Promise<GetTraceGraphOutput>;
    public getTraceGraph(
        args: GetTraceGraphInput,
        cb: (err: any, data?: GetTraceGraphOutput) => void
    ): void;
    public getTraceGraph(
        args: GetTraceGraphInput,
        cb?: (err: any, data?: GetTraceGraphOutput) => void
    ): Promise<GetTraceGraphOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetTraceGraphCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * GetTraceSummaries operation
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidRequestException} InvalidRequestException shape
     *   - {ThrottledException} ThrottledException shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getTraceSummaries(args: GetTraceSummariesInput): Promise<GetTraceSummariesOutput>;
    public getTraceSummaries(
        args: GetTraceSummariesInput,
        cb: (err: any, data?: GetTraceSummariesOutput) => void
    ): void;
    public getTraceSummaries(
        args: GetTraceSummariesInput,
        cb?: (err: any, data?: GetTraceSummariesOutput) => void
    ): Promise<GetTraceSummariesOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetTraceSummariesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutEncryptionConfig operation
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidRequestException} InvalidRequestException shape
     *   - {ThrottledException} ThrottledException shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putEncryptionConfig(args: PutEncryptionConfigInput): Promise<PutEncryptionConfigOutput>;
    public putEncryptionConfig(
        args: PutEncryptionConfigInput,
        cb: (err: any, data?: PutEncryptionConfigOutput) => void
    ): void;
    public putEncryptionConfig(
        args: PutEncryptionConfigInput,
        cb?: (err: any, data?: PutEncryptionConfigOutput) => void
    ): Promise<PutEncryptionConfigOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutEncryptionConfigCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutTelemetryRecords operation
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidRequestException} InvalidRequestException shape
     *   - {ThrottledException} ThrottledException shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putTelemetryRecords(args: PutTelemetryRecordsInput): Promise<PutTelemetryRecordsOutput>;
    public putTelemetryRecords(
        args: PutTelemetryRecordsInput,
        cb: (err: any, data?: PutTelemetryRecordsOutput) => void
    ): void;
    public putTelemetryRecords(
        args: PutTelemetryRecordsInput,
        cb?: (err: any, data?: PutTelemetryRecordsOutput) => void
    ): Promise<PutTelemetryRecordsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutTelemetryRecordsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * PutTraceSegments operation
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidRequestException} InvalidRequestException shape
     *   - {ThrottledException} ThrottledException shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putTraceSegments(args: PutTraceSegmentsInput): Promise<PutTraceSegmentsOutput>;
    public putTraceSegments(
        args: PutTraceSegmentsInput,
        cb: (err: any, data?: PutTraceSegmentsOutput) => void
    ): void;
    public putTraceSegments(
        args: PutTraceSegmentsInput,
        cb?: (err: any, data?: PutTraceSegmentsOutput) => void
    ): Promise<PutTraceSegmentsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutTraceSegmentsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * UpdateSamplingRule operation
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidRequestException} InvalidRequestException shape
     *   - {ThrottledException} ThrottledException shape
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public updateSamplingRule(args: UpdateSamplingRuleInput): Promise<UpdateSamplingRuleOutput>;
    public updateSamplingRule(
        args: UpdateSamplingRuleInput,
        cb: (err: any, data?: UpdateSamplingRuleOutput) => void
    ): void;
    public updateSamplingRule(
        args: UpdateSamplingRuleInput,
        cb?: (err: any, data?: UpdateSamplingRuleOutput) => void
    ): Promise<UpdateSamplingRuleOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UpdateSamplingRuleCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }
}
