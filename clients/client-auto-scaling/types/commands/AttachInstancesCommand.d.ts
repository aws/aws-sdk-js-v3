import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { AttachInstancesQuery } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AttachInstancesCommandInput = AttachInstancesQuery;
export declare type AttachInstancesCommandOutput = __MetadataBearer;
export declare class AttachInstancesCommand extends $Command<AttachInstancesCommandInput, AttachInstancesCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: AttachInstancesCommandInput;
    constructor(input: AttachInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachInstancesCommandInput, AttachInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
