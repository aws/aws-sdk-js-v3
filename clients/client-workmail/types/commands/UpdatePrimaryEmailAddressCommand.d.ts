import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { UpdatePrimaryEmailAddressRequest, UpdatePrimaryEmailAddressResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdatePrimaryEmailAddressCommandInput = UpdatePrimaryEmailAddressRequest;
export declare type UpdatePrimaryEmailAddressCommandOutput = UpdatePrimaryEmailAddressResponse & __MetadataBearer;
export declare class UpdatePrimaryEmailAddressCommand extends $Command<UpdatePrimaryEmailAddressCommandInput, UpdatePrimaryEmailAddressCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: UpdatePrimaryEmailAddressCommandInput;
    constructor(input: UpdatePrimaryEmailAddressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePrimaryEmailAddressCommandInput, UpdatePrimaryEmailAddressCommandOutput>;
    private serialize;
    private deserialize;
}
