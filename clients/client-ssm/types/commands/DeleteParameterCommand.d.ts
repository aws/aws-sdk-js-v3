import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DeleteParameterRequest, DeleteParameterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteParameterCommandInput = DeleteParameterRequest;
export declare type DeleteParameterCommandOutput = DeleteParameterResult & __MetadataBearer;
export declare class DeleteParameterCommand extends $Command<DeleteParameterCommandInput, DeleteParameterCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeleteParameterCommandInput;
    constructor(input: DeleteParameterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteParameterCommandInput, DeleteParameterCommandOutput>;
    private serialize;
    private deserialize;
}
