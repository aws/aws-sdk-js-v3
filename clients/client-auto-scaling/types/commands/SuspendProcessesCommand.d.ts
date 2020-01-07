import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { ScalingProcessQuery } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SuspendProcessesCommandInput = ScalingProcessQuery;
export declare type SuspendProcessesCommandOutput = __MetadataBearer;
export declare class SuspendProcessesCommand extends $Command<SuspendProcessesCommandInput, SuspendProcessesCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: SuspendProcessesCommandInput;
    constructor(input: SuspendProcessesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SuspendProcessesCommandInput, SuspendProcessesCommandOutput>;
    private serialize;
    private deserialize;
}
