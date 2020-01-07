import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateSoftwareUpdateJobRequest, CreateSoftwareUpdateJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSoftwareUpdateJobCommandInput = CreateSoftwareUpdateJobRequest;
export declare type CreateSoftwareUpdateJobCommandOutput = CreateSoftwareUpdateJobResponse & __MetadataBearer;
export declare class CreateSoftwareUpdateJobCommand extends $Command<CreateSoftwareUpdateJobCommandInput, CreateSoftwareUpdateJobCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateSoftwareUpdateJobCommandInput;
    constructor(input: CreateSoftwareUpdateJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSoftwareUpdateJobCommandInput, CreateSoftwareUpdateJobCommandOutput>;
    private serialize;
    private deserialize;
}
