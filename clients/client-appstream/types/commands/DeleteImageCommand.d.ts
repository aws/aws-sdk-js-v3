import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DeleteImageRequest, DeleteImageResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteImageCommandInput = DeleteImageRequest;
export declare type DeleteImageCommandOutput = DeleteImageResult & __MetadataBearer;
export declare class DeleteImageCommand extends $Command<DeleteImageCommandInput, DeleteImageCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: DeleteImageCommandInput;
    constructor(input: DeleteImageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteImageCommandInput, DeleteImageCommandOutput>;
    private serialize;
    private deserialize;
}
