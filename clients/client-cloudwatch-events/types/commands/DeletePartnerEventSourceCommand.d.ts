import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { DeletePartnerEventSourceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeletePartnerEventSourceCommandInput = DeletePartnerEventSourceRequest;
export declare type DeletePartnerEventSourceCommandOutput = __MetadataBearer;
export declare class DeletePartnerEventSourceCommand extends $Command<DeletePartnerEventSourceCommandInput, DeletePartnerEventSourceCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: DeletePartnerEventSourceCommandInput;
    constructor(input: DeletePartnerEventSourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePartnerEventSourceCommandInput, DeletePartnerEventSourceCommandOutput>;
    private serialize;
    private deserialize;
}
