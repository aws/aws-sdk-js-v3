import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { CreateConfigurationSetEventDestinationRequest, CreateConfigurationSetEventDestinationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateConfigurationSetEventDestinationCommandInput = CreateConfigurationSetEventDestinationRequest;
export declare type CreateConfigurationSetEventDestinationCommandOutput = CreateConfigurationSetEventDestinationResponse & __MetadataBearer;
export declare class CreateConfigurationSetEventDestinationCommand extends $Command<CreateConfigurationSetEventDestinationCommandInput, CreateConfigurationSetEventDestinationCommandOutput, SESClientResolvedConfig> {
    readonly input: CreateConfigurationSetEventDestinationCommandInput;
    constructor(input: CreateConfigurationSetEventDestinationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConfigurationSetEventDestinationCommandInput, CreateConfigurationSetEventDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
