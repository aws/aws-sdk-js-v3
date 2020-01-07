import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { UpdateDirectoryConfigRequest, UpdateDirectoryConfigResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDirectoryConfigCommandInput = UpdateDirectoryConfigRequest;
export declare type UpdateDirectoryConfigCommandOutput = UpdateDirectoryConfigResult & __MetadataBearer;
export declare class UpdateDirectoryConfigCommand extends $Command<UpdateDirectoryConfigCommandInput, UpdateDirectoryConfigCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: UpdateDirectoryConfigCommandInput;
    constructor(input: UpdateDirectoryConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDirectoryConfigCommandInput, UpdateDirectoryConfigCommandOutput>;
    private serialize;
    private deserialize;
}
