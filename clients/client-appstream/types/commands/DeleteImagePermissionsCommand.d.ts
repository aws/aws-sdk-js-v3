import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DeleteImagePermissionsRequest, DeleteImagePermissionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteImagePermissionsCommandInput = DeleteImagePermissionsRequest;
export declare type DeleteImagePermissionsCommandOutput = DeleteImagePermissionsResult & __MetadataBearer;
export declare class DeleteImagePermissionsCommand extends $Command<DeleteImagePermissionsCommandInput, DeleteImagePermissionsCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: DeleteImagePermissionsCommandInput;
    constructor(input: DeleteImagePermissionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteImagePermissionsCommandInput, DeleteImagePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
