import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { DeleteConfigurationSetEventDestinationRequest, DeleteConfigurationSetEventDestinationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteConfigurationSetEventDestinationCommandInput = DeleteConfigurationSetEventDestinationRequest;
export declare type DeleteConfigurationSetEventDestinationCommandOutput = DeleteConfigurationSetEventDestinationResponse & __MetadataBearer;
export declare class DeleteConfigurationSetEventDestinationCommand extends $Command<DeleteConfigurationSetEventDestinationCommandInput, DeleteConfigurationSetEventDestinationCommandOutput, SESClientResolvedConfig> {
    readonly input: DeleteConfigurationSetEventDestinationCommandInput;
    constructor(input: DeleteConfigurationSetEventDestinationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConfigurationSetEventDestinationCommandInput, DeleteConfigurationSetEventDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
