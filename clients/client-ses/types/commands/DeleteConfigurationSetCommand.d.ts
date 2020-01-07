import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { DeleteConfigurationSetRequest, DeleteConfigurationSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteConfigurationSetCommandInput = DeleteConfigurationSetRequest;
export declare type DeleteConfigurationSetCommandOutput = DeleteConfigurationSetResponse & __MetadataBearer;
export declare class DeleteConfigurationSetCommand extends $Command<DeleteConfigurationSetCommandInput, DeleteConfigurationSetCommandOutput, SESClientResolvedConfig> {
    readonly input: DeleteConfigurationSetCommandInput;
    constructor(input: DeleteConfigurationSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConfigurationSetCommandInput, DeleteConfigurationSetCommandOutput>;
    private serialize;
    private deserialize;
}
