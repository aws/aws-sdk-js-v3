import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DeleteImageBuilderRequest, DeleteImageBuilderResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteImageBuilderCommandInput = DeleteImageBuilderRequest;
export declare type DeleteImageBuilderCommandOutput = DeleteImageBuilderResult & __MetadataBearer;
export declare class DeleteImageBuilderCommand extends $Command<DeleteImageBuilderCommandInput, DeleteImageBuilderCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: DeleteImageBuilderCommandInput;
    constructor(input: DeleteImageBuilderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteImageBuilderCommandInput, DeleteImageBuilderCommandOutput>;
    private serialize;
    private deserialize;
}
