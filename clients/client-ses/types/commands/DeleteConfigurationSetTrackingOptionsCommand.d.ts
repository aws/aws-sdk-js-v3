import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { DeleteConfigurationSetTrackingOptionsRequest, DeleteConfigurationSetTrackingOptionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteConfigurationSetTrackingOptionsCommandInput = DeleteConfigurationSetTrackingOptionsRequest;
export declare type DeleteConfigurationSetTrackingOptionsCommandOutput = DeleteConfigurationSetTrackingOptionsResponse & __MetadataBearer;
export declare class DeleteConfigurationSetTrackingOptionsCommand extends $Command<DeleteConfigurationSetTrackingOptionsCommandInput, DeleteConfigurationSetTrackingOptionsCommandOutput, SESClientResolvedConfig> {
    readonly input: DeleteConfigurationSetTrackingOptionsCommandInput;
    constructor(input: DeleteConfigurationSetTrackingOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConfigurationSetTrackingOptionsCommandInput, DeleteConfigurationSetTrackingOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
