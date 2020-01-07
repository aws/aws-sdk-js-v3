import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { UpdateFlowSourceRequest, UpdateFlowSourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateFlowSourceCommandInput = UpdateFlowSourceRequest;
export declare type UpdateFlowSourceCommandOutput = UpdateFlowSourceResponse & __MetadataBearer;
export declare class UpdateFlowSourceCommand extends $Command<UpdateFlowSourceCommandInput, UpdateFlowSourceCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: UpdateFlowSourceCommandInput;
    constructor(input: UpdateFlowSourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFlowSourceCommandInput, UpdateFlowSourceCommandOutput>;
    private serialize;
    private deserialize;
}
