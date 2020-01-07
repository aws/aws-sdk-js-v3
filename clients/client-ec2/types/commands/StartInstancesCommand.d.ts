import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { StartInstancesRequest, StartInstancesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartInstancesCommandInput = StartInstancesRequest;
export declare type StartInstancesCommandOutput = StartInstancesResult & __MetadataBearer;
export declare class StartInstancesCommand extends $Command<StartInstancesCommandInput, StartInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: StartInstancesCommandInput;
    constructor(input: StartInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartInstancesCommandInput, StartInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
