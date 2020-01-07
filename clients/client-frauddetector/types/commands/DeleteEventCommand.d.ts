import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteEventRequest, DeleteEventResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteEventCommandInput = DeleteEventRequest;
export declare type DeleteEventCommandOutput = DeleteEventResult & __MetadataBearer;
export declare class DeleteEventCommand extends $Command<DeleteEventCommandInput, DeleteEventCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: DeleteEventCommandInput;
    constructor(input: DeleteEventCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEventCommandInput, DeleteEventCommandOutput>;
    private serialize;
    private deserialize;
}
