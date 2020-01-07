import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { Reservation, RunInstancesRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RunInstancesCommandInput = RunInstancesRequest;
export declare type RunInstancesCommandOutput = Reservation & __MetadataBearer;
export declare class RunInstancesCommand extends $Command<RunInstancesCommandInput, RunInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RunInstancesCommandInput;
    constructor(input: RunInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RunInstancesCommandInput, RunInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
