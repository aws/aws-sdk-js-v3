import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DeleteLayerRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLayerCommandInput = DeleteLayerRequest;
export declare type DeleteLayerCommandOutput = __MetadataBearer;
export declare class DeleteLayerCommand extends $Command<DeleteLayerCommandInput, DeleteLayerCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DeleteLayerCommandInput;
    constructor(input: DeleteLayerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLayerCommandInput, DeleteLayerCommandOutput>;
    private serialize;
    private deserialize;
}
