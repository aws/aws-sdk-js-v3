import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateTriggerRequest, UpdateTriggerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateTriggerCommandInput = UpdateTriggerRequest;
export declare type UpdateTriggerCommandOutput = UpdateTriggerResponse & __MetadataBearer;
export declare class UpdateTriggerCommand extends $Command<UpdateTriggerCommandInput, UpdateTriggerCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateTriggerCommandInput;
    constructor(input: UpdateTriggerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTriggerCommandInput, UpdateTriggerCommandOutput>;
    private serialize;
    private deserialize;
}
