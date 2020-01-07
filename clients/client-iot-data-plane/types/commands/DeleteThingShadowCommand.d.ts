import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient";
import { DeleteThingShadowRequest, DeleteThingShadowResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteThingShadowCommandInput = DeleteThingShadowRequest;
export declare type DeleteThingShadowCommandOutput = DeleteThingShadowResponse & __MetadataBearer;
export declare class DeleteThingShadowCommand extends $Command<DeleteThingShadowCommandInput, DeleteThingShadowCommandOutput, IoTDataPlaneClientResolvedConfig> {
    readonly input: DeleteThingShadowCommandInput;
    constructor(input: DeleteThingShadowCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTDataPlaneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteThingShadowCommandInput, DeleteThingShadowCommandOutput>;
    private serialize;
    private deserialize;
}
