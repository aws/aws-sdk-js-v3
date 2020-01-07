import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteGatewayInput, DeleteGatewayOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteGatewayCommandInput = DeleteGatewayInput;
export declare type DeleteGatewayCommandOutput = DeleteGatewayOutput & __MetadataBearer;
export declare class DeleteGatewayCommand extends $Command<DeleteGatewayCommandInput, DeleteGatewayCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DeleteGatewayCommandInput;
    constructor(input: DeleteGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteGatewayCommandInput, DeleteGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
