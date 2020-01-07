import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DeleteParametersRequest, DeleteParametersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteParametersCommandInput = DeleteParametersRequest;
export declare type DeleteParametersCommandOutput = DeleteParametersResult & __MetadataBearer;
export declare class DeleteParametersCommand extends $Command<DeleteParametersCommandInput, DeleteParametersCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeleteParametersCommandInput;
    constructor(input: DeleteParametersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteParametersCommandInput, DeleteParametersCommandOutput>;
    private serialize;
    private deserialize;
}
