import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { DeletePlatformApplicationInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeletePlatformApplicationCommandInput = DeletePlatformApplicationInput;
export declare type DeletePlatformApplicationCommandOutput = __MetadataBearer;
export declare class DeletePlatformApplicationCommand extends $Command<DeletePlatformApplicationCommandInput, DeletePlatformApplicationCommandOutput, SNSClientResolvedConfig> {
    readonly input: DeletePlatformApplicationCommandInput;
    constructor(input: DeletePlatformApplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePlatformApplicationCommandInput, DeletePlatformApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
