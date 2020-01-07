import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { UpdateFlowOutputRequest, UpdateFlowOutputResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateFlowOutputCommandInput = UpdateFlowOutputRequest;
export declare type UpdateFlowOutputCommandOutput = UpdateFlowOutputResponse & __MetadataBearer;
export declare class UpdateFlowOutputCommand extends $Command<UpdateFlowOutputCommandInput, UpdateFlowOutputCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: UpdateFlowOutputCommandInput;
    constructor(input: UpdateFlowOutputCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFlowOutputCommandInput, UpdateFlowOutputCommandOutput>;
    private serialize;
    private deserialize;
}
