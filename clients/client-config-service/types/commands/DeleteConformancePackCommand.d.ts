import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteConformancePackRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteConformancePackCommandInput = DeleteConformancePackRequest;
export declare type DeleteConformancePackCommandOutput = __MetadataBearer;
export declare class DeleteConformancePackCommand extends $Command<DeleteConformancePackCommandInput, DeleteConformancePackCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteConformancePackCommandInput;
    constructor(input: DeleteConformancePackCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConformancePackCommandInput, DeleteConformancePackCommandOutput>;
    private serialize;
    private deserialize;
}
