import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { UpdateLayerRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateLayerCommandInput = UpdateLayerRequest;
export declare type UpdateLayerCommandOutput = __MetadataBearer;
export declare class UpdateLayerCommand extends $Command<UpdateLayerCommandInput, UpdateLayerCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: UpdateLayerCommandInput;
    constructor(input: UpdateLayerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLayerCommandInput, UpdateLayerCommandOutput>;
    private serialize;
    private deserialize;
}
