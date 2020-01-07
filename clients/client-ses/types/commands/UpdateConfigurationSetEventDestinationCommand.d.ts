import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { UpdateConfigurationSetEventDestinationRequest, UpdateConfigurationSetEventDestinationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateConfigurationSetEventDestinationCommandInput = UpdateConfigurationSetEventDestinationRequest;
export declare type UpdateConfigurationSetEventDestinationCommandOutput = UpdateConfigurationSetEventDestinationResponse & __MetadataBearer;
export declare class UpdateConfigurationSetEventDestinationCommand extends $Command<UpdateConfigurationSetEventDestinationCommandInput, UpdateConfigurationSetEventDestinationCommandOutput, SESClientResolvedConfig> {
    readonly input: UpdateConfigurationSetEventDestinationCommandInput;
    constructor(input: UpdateConfigurationSetEventDestinationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateConfigurationSetEventDestinationCommandInput, UpdateConfigurationSetEventDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
