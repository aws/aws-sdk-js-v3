import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DeleteStackRequest, DeleteStackResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteStackCommandInput = DeleteStackRequest;
export declare type DeleteStackCommandOutput = DeleteStackResult & __MetadataBearer;
export declare class DeleteStackCommand extends $Command<DeleteStackCommandInput, DeleteStackCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: DeleteStackCommandInput;
    constructor(input: DeleteStackCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteStackCommandInput, DeleteStackCommandOutput>;
    private serialize;
    private deserialize;
}
