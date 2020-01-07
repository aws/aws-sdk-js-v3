import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateSAMLProviderRequest, UpdateSAMLProviderResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateSAMLProviderCommandInput = UpdateSAMLProviderRequest;
export declare type UpdateSAMLProviderCommandOutput = UpdateSAMLProviderResponse & __MetadataBearer;
export declare class UpdateSAMLProviderCommand extends $Command<UpdateSAMLProviderCommandInput, UpdateSAMLProviderCommandOutput, IAMClientResolvedConfig> {
    readonly input: UpdateSAMLProviderCommandInput;
    constructor(input: UpdateSAMLProviderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSAMLProviderCommandInput, UpdateSAMLProviderCommandOutput>;
    private serialize;
    private deserialize;
}
