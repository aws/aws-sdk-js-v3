import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { UpdateAcceleratorAttributesRequest, UpdateAcceleratorAttributesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateAcceleratorAttributesCommandInput = UpdateAcceleratorAttributesRequest;
export declare type UpdateAcceleratorAttributesCommandOutput = UpdateAcceleratorAttributesResponse & __MetadataBearer;
export declare class UpdateAcceleratorAttributesCommand extends $Command<UpdateAcceleratorAttributesCommandInput, UpdateAcceleratorAttributesCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: UpdateAcceleratorAttributesCommandInput;
    constructor(input: UpdateAcceleratorAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAcceleratorAttributesCommandInput, UpdateAcceleratorAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
