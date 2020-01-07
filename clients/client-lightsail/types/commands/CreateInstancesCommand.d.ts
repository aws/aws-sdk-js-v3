import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateInstancesRequest, CreateInstancesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateInstancesCommandInput = CreateInstancesRequest;
export declare type CreateInstancesCommandOutput = CreateInstancesResult & __MetadataBearer;
export declare class CreateInstancesCommand extends $Command<CreateInstancesCommandInput, CreateInstancesCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateInstancesCommandInput;
    constructor(input: CreateInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateInstancesCommandInput, CreateInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
