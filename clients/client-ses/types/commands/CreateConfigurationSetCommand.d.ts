import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { CreateConfigurationSetRequest, CreateConfigurationSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateConfigurationSetCommandInput = CreateConfigurationSetRequest;
export declare type CreateConfigurationSetCommandOutput = CreateConfigurationSetResponse & __MetadataBearer;
export declare class CreateConfigurationSetCommand extends $Command<CreateConfigurationSetCommandInput, CreateConfigurationSetCommandOutput, SESClientResolvedConfig> {
    readonly input: CreateConfigurationSetCommandInput;
    constructor(input: CreateConfigurationSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConfigurationSetCommandInput, CreateConfigurationSetCommandOutput>;
    private serialize;
    private deserialize;
}
