import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateSMBFileShareInput, UpdateSMBFileShareOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateSMBFileShareCommandInput = UpdateSMBFileShareInput;
export declare type UpdateSMBFileShareCommandOutput = UpdateSMBFileShareOutput & __MetadataBearer;
export declare class UpdateSMBFileShareCommand extends $Command<UpdateSMBFileShareCommandInput, UpdateSMBFileShareCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: UpdateSMBFileShareCommandInput;
    constructor(input: UpdateSMBFileShareCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSMBFileShareCommandInput, UpdateSMBFileShareCommandOutput>;
    private serialize;
    private deserialize;
}
