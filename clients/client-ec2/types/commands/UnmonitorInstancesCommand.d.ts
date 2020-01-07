import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { UnmonitorInstancesRequest, UnmonitorInstancesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UnmonitorInstancesCommandInput = UnmonitorInstancesRequest;
export declare type UnmonitorInstancesCommandOutput = UnmonitorInstancesResult & __MetadataBearer;
export declare class UnmonitorInstancesCommand extends $Command<UnmonitorInstancesCommandInput, UnmonitorInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: UnmonitorInstancesCommandInput;
    constructor(input: UnmonitorInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnmonitorInstancesCommandInput, UnmonitorInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
