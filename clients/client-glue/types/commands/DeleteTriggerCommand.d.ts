import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteTriggerRequest, DeleteTriggerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTriggerCommandInput = DeleteTriggerRequest;
export declare type DeleteTriggerCommandOutput = DeleteTriggerResponse & __MetadataBearer;
export declare class DeleteTriggerCommand extends $Command<DeleteTriggerCommandInput, DeleteTriggerCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteTriggerCommandInput;
    constructor(input: DeleteTriggerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTriggerCommandInput, DeleteTriggerCommandOutput>;
    private serialize;
    private deserialize;
}
