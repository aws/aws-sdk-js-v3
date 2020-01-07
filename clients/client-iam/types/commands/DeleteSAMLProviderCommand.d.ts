import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteSAMLProviderRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSAMLProviderCommandInput = DeleteSAMLProviderRequest;
export declare type DeleteSAMLProviderCommandOutput = __MetadataBearer;
export declare class DeleteSAMLProviderCommand extends $Command<DeleteSAMLProviderCommandInput, DeleteSAMLProviderCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteSAMLProviderCommandInput;
    constructor(input: DeleteSAMLProviderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSAMLProviderCommandInput, DeleteSAMLProviderCommandOutput>;
    private serialize;
    private deserialize;
}
