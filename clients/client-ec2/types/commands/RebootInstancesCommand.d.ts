import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RebootInstancesRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RebootInstancesCommandInput = RebootInstancesRequest;
export declare type RebootInstancesCommandOutput = __MetadataBearer;
export declare class RebootInstancesCommand extends $Command<RebootInstancesCommandInput, RebootInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RebootInstancesCommandInput;
    constructor(input: RebootInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebootInstancesCommandInput, RebootInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
