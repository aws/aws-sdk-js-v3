import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { DeleteAppRequest, DeleteAppResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAppCommandInput = DeleteAppRequest;
export declare type DeleteAppCommandOutput = DeleteAppResponse & __MetadataBearer;
export declare class DeleteAppCommand extends $Command<DeleteAppCommandInput, DeleteAppCommandOutput, SMSClientResolvedConfig> {
    readonly input: DeleteAppCommandInput;
    constructor(input: DeleteAppCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAppCommandInput, DeleteAppCommandOutput>;
    private serialize;
    private deserialize;
}
