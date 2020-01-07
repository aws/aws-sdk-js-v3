import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { UpdateRadiusRequest, UpdateRadiusResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateRadiusCommandInput = UpdateRadiusRequest;
export declare type UpdateRadiusCommandOutput = UpdateRadiusResult & __MetadataBearer;
export declare class UpdateRadiusCommand extends $Command<UpdateRadiusCommandInput, UpdateRadiusCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: UpdateRadiusCommandInput;
    constructor(input: UpdateRadiusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRadiusCommandInput, UpdateRadiusCommandOutput>;
    private serialize;
    private deserialize;
}
