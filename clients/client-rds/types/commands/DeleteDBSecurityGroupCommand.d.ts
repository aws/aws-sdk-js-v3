import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteDBSecurityGroupMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDBSecurityGroupCommandInput = DeleteDBSecurityGroupMessage;
export declare type DeleteDBSecurityGroupCommandOutput = __MetadataBearer;
export declare class DeleteDBSecurityGroupCommand extends $Command<DeleteDBSecurityGroupCommandInput, DeleteDBSecurityGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: DeleteDBSecurityGroupCommandInput;
    constructor(input: DeleteDBSecurityGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDBSecurityGroupCommandInput, DeleteDBSecurityGroupCommandOutput>;
    private serialize;
    private deserialize;
}
