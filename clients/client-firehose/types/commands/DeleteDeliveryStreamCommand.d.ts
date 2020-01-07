import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { DeleteDeliveryStreamInput, DeleteDeliveryStreamOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDeliveryStreamCommandInput = DeleteDeliveryStreamInput;
export declare type DeleteDeliveryStreamCommandOutput = DeleteDeliveryStreamOutput & __MetadataBearer;
export declare class DeleteDeliveryStreamCommand extends $Command<DeleteDeliveryStreamCommandInput, DeleteDeliveryStreamCommandOutput, FirehoseClientResolvedConfig> {
    readonly input: DeleteDeliveryStreamCommandInput;
    constructor(input: DeleteDeliveryStreamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FirehoseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDeliveryStreamCommandInput, DeleteDeliveryStreamCommandOutput>;
    private serialize;
    private deserialize;
}
