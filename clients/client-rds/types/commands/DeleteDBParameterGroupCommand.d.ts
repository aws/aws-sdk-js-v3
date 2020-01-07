import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteDBParameterGroupMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDBParameterGroupCommandInput = DeleteDBParameterGroupMessage;
export declare type DeleteDBParameterGroupCommandOutput = __MetadataBearer;
export declare class DeleteDBParameterGroupCommand extends $Command<DeleteDBParameterGroupCommandInput, DeleteDBParameterGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: DeleteDBParameterGroupCommandInput;
    constructor(input: DeleteDBParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDBParameterGroupCommandInput, DeleteDBParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
