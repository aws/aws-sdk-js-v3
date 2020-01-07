import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { UpdateImagePermissionsRequest, UpdateImagePermissionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateImagePermissionsCommandInput = UpdateImagePermissionsRequest;
export declare type UpdateImagePermissionsCommandOutput = UpdateImagePermissionsResult & __MetadataBearer;
export declare class UpdateImagePermissionsCommand extends $Command<UpdateImagePermissionsCommandInput, UpdateImagePermissionsCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: UpdateImagePermissionsCommandInput;
    constructor(input: UpdateImagePermissionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateImagePermissionsCommandInput, UpdateImagePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
