import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { StartAvailabilityMonitorTestInput, StartAvailabilityMonitorTestOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartAvailabilityMonitorTestCommandInput = StartAvailabilityMonitorTestInput;
export declare type StartAvailabilityMonitorTestCommandOutput = StartAvailabilityMonitorTestOutput & __MetadataBearer;
export declare class StartAvailabilityMonitorTestCommand extends $Command<StartAvailabilityMonitorTestCommandInput, StartAvailabilityMonitorTestCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: StartAvailabilityMonitorTestCommandInput;
    constructor(input: StartAvailabilityMonitorTestCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartAvailabilityMonitorTestCommandInput, StartAvailabilityMonitorTestCommandOutput>;
    private serialize;
    private deserialize;
}
